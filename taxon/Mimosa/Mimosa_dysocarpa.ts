// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa dysocarpa
const Mimosa_dysocarpa = new Mimosa()
Mimosa_dysocarpa.specificEpithet = 'dysocarpa'

Mimosa_dysocarpa.stems = new Stems()

Mimosa_dysocarpa.stipule = new Stipule()
Mimosa_dysocarpa.stipule.margin = new MarginStipule()
Mimosa_dysocarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_dysocarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_dysocarpa.leaf = new Leaf()
Mimosa_dysocarpa.leaf.petiole = new Petiole()
Mimosa_dysocarpa.leaf.bipinnate = new Bipinnate()
Mimosa_dysocarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_dysocarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_dysocarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_dysocarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_dysocarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_dysocarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_dysocarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(17, 24)
Mimosa_dysocarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_dysocarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_dysocarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_dysocarpa.inflorescence = new Inflorescence()
Mimosa_dysocarpa.inflorescence.peduncle = new Peduncle()
Mimosa_dysocarpa.inflorescence.spicate = new Spicate()

Mimosa_dysocarpa.flower = new Flower()
Mimosa_dysocarpa.flower.bracteole = new Bracteole()
Mimosa_dysocarpa.flower.merism = ['4-merous', '5-merous']
Mimosa_dysocarpa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_dysocarpa.flower.calyx = new Calyx()
Mimosa_dysocarpa.flower.calyx.shape = 'campanulate'
Mimosa_dysocarpa.flower.corolla = new Corolla()

Mimosa_dysocarpa.androecium = new Androecium()
Mimosa_dysocarpa.androecium.filaments = new Filaments()
Mimosa_dysocarpa.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_dysocarpa.ginoecium = new Ginoecium()
Mimosa_dysocarpa.ginoecium.ovary = new Ovary()

Mimosa_dysocarpa.fruit = new Fruit()
Mimosa_dysocarpa.fruit.stipe = new Stipe()
Mimosa_dysocarpa.fruit.replum = new Replum()
Mimosa_dysocarpa.fruit.epicarp = new Epicarp()

Mimosa_dysocarpa.seed = new Seed()


// Description authorship
Mimosa_dysocarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_dysocarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa dysocarpa
export { Mimosa_dysocarpa }