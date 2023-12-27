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


// Description of Mimosa nothopteris
const Mimosa_nothopteris = new Mimosa()
Mimosa_nothopteris.specificEpithet = 'nothopteris'

Mimosa_nothopteris.stems = new Stems()

Mimosa_nothopteris.stipule = new Stipule()
Mimosa_nothopteris.stipule.margin = new MarginStipule()
Mimosa_nothopteris.stipule.adaxial = new AdaxialStipule()
Mimosa_nothopteris.stipule.abaxial = new AbaxialStipule()

Mimosa_nothopteris.leaf = new Leaf()
Mimosa_nothopteris.leaf.petiole = new Petiole()
Mimosa_nothopteris.leaf.bipinnate = new Bipinnate()
Mimosa_nothopteris.leaf.bipinnate.rachis = new Rachis()
Mimosa_nothopteris.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_nothopteris.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_nothopteris.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 7)
Mimosa_nothopteris.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_nothopteris.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_nothopteris.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_nothopteris.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(12)
Mimosa_nothopteris.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 23)
Mimosa_nothopteris.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_nothopteris.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_nothopteris.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_nothopteris.inflorescence = new Inflorescence()
Mimosa_nothopteris.inflorescence.peduncle = new Peduncle()
Mimosa_nothopteris.inflorescence.spicate = new Spicate()

Mimosa_nothopteris.flower = new Flower()
Mimosa_nothopteris.flower.bracteole = new Bracteole()
Mimosa_nothopteris.flower.merism = '4-merous'
Mimosa_nothopteris.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_nothopteris.flower.calyx = new Calyx()
Mimosa_nothopteris.flower.corolla = new Corolla()
Mimosa_nothopteris.flower.corolla.shape = 'turbinate'

Mimosa_nothopteris.androecium = new Androecium()
Mimosa_nothopteris.androecium.filaments = new Filaments()
Mimosa_nothopteris.androecium.filaments.colour = 'pinkish'

Mimosa_nothopteris.ginoecium = new Ginoecium()
Mimosa_nothopteris.ginoecium.ovary = new Ovary()

Mimosa_nothopteris.fruit = new Fruit()
Mimosa_nothopteris.fruit.stipe = new Stipe()
Mimosa_nothopteris.fruit.replum = new Replum()
Mimosa_nothopteris.fruit.epicarp = new Epicarp()

Mimosa_nothopteris.seed = new Seed()


// Description authorship
Mimosa_nothopteris.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_nothopteris.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa nothopteris
export { Mimosa_nothopteris }