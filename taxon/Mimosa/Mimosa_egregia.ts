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


// Description of Mimosa egregia
const Mimosa_egregia = new Mimosa()
Mimosa_egregia.specificEpithet = 'egregia'

Mimosa_egregia.stems = new Stems()

Mimosa_egregia.stipule = new Stipule()
Mimosa_egregia.stipule.margin = new MarginStipule()
Mimosa_egregia.stipule.adaxial = new AdaxialStipule()
Mimosa_egregia.stipule.abaxial = new AbaxialStipule()

Mimosa_egregia.leaf = new Leaf()
Mimosa_egregia.leaf.petiole = new Petiole()
Mimosa_egregia.leaf.bipinnate = new Bipinnate()
Mimosa_egregia.leaf.bipinnate.rachis = new Rachis()
Mimosa_egregia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_egregia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_egregia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_egregia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_egregia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_egregia.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(28, 45)
Mimosa_egregia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_egregia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_egregia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_egregia.inflorescence = new Inflorescence()
Mimosa_egregia.inflorescence.peduncle = new Peduncle()
Mimosa_egregia.inflorescence.spicate = new Spicate()

Mimosa_egregia.flower = new Flower()
Mimosa_egregia.flower.bracteole = new Bracteole()
Mimosa_egregia.flower.merism = '5-merous'
Mimosa_egregia.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_egregia.flower.calyx = new Calyx()
Mimosa_egregia.flower.calyx.shape = 'campanulate'
Mimosa_egregia.flower.corolla = new Corolla()

Mimosa_egregia.androecium = new Androecium()
Mimosa_egregia.androecium.filaments = new Filaments()
Mimosa_egregia.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_egregia.ginoecium = new Ginoecium()
Mimosa_egregia.ginoecium.ovary = new Ovary()

Mimosa_egregia.fruit = new Fruit()
Mimosa_egregia.fruit.stipe = new Stipe()
Mimosa_egregia.fruit.replum = new Replum()
Mimosa_egregia.fruit.epicarp = new Epicarp()

Mimosa_egregia.seed = new Seed()


// Description authorship
Mimosa_egregia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_egregia.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa egregia
export { Mimosa_egregia }