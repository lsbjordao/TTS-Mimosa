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
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa unipinnata
const Mimosa_unipinnata = new Mimosa()
Mimosa_unipinnata.specificEpithet = 'unipinnata'

Mimosa_unipinnata.stems = new Stems()

Mimosa_unipinnata.stipule = new Stipule()
Mimosa_unipinnata.stipule.margin = new MarginStipule()
Mimosa_unipinnata.stipule.adaxial = new AdaxialStipule()
Mimosa_unipinnata.stipule.abaxial = new AbaxialStipule()

Mimosa_unipinnata.leaf = new Leaf()
Mimosa_unipinnata.leaf.petiole = new Petiole()
Mimosa_unipinnata.leaf.bipinnate = new Bipinnate()
Mimosa_unipinnata.leaf.bipinnate.rachis = new Rachis()
Mimosa_unipinnata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_unipinnata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_unipinnata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_unipinnata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_unipinnata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_unipinnata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 19)
Mimosa_unipinnata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_unipinnata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_unipinnata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_unipinnata.inflorescence = new Inflorescence()
Mimosa_unipinnata.inflorescence.peduncle = new Peduncle()
Mimosa_unipinnata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_unipinnata.flower = new Flower()
Mimosa_unipinnata.flower.bracteole = new Bracteole()
Mimosa_unipinnata.flower.merism = '4-merous'
Mimosa_unipinnata.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_unipinnata.flower.calyx = new Calyx()
Mimosa_unipinnata.flower.calyx.shape = 'campanulate'
Mimosa_unipinnata.flower.corolla = new Corolla()
Mimosa_unipinnata.flower.corolla.shape = 'turbinate'

Mimosa_unipinnata.androecium = new Androecium()
Mimosa_unipinnata.androecium.filaments = new Filaments()

Mimosa_unipinnata.ginoecium = new Ginoecium()
Mimosa_unipinnata.ginoecium.ovary = new Ovary()

Mimosa_unipinnata.fruit = new Fruit()
Mimosa_unipinnata.fruit.stipe = new Stipe()
Mimosa_unipinnata.fruit.replum = new Replum()
Mimosa_unipinnata.fruit.epicarp = new Epicarp()

Mimosa_unipinnata.seed = new Seed()


// Description authorship
Mimosa_unipinnata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_unipinnata.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa unipinnata
export { Mimosa_unipinnata }