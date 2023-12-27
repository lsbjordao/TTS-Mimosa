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


// Description of Mimosa phyllodinea
const Mimosa_phyllodinea = new Mimosa()
Mimosa_phyllodinea.specificEpithet = 'phyllodinea'

Mimosa_phyllodinea.stems = new Stems()

Mimosa_phyllodinea.stipule = new Stipule()
Mimosa_phyllodinea.stipule.margin = new MarginStipule()
Mimosa_phyllodinea.stipule.adaxial = new AdaxialStipule()
Mimosa_phyllodinea.stipule.abaxial = new AbaxialStipule()

Mimosa_phyllodinea.leaf = new Leaf()
Mimosa_phyllodinea.leaf.petiole = new Petiole()
Mimosa_phyllodinea.leaf.bipinnate = new Bipinnate()
Mimosa_phyllodinea.leaf.bipinnate.rachis = new Rachis()
Mimosa_phyllodinea.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_phyllodinea.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_phyllodinea.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_phyllodinea.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_phyllodinea.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_phyllodinea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(6)
Mimosa_phyllodinea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 13)
Mimosa_phyllodinea.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_phyllodinea.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_phyllodinea.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_phyllodinea.inflorescence = new Inflorescence()
Mimosa_phyllodinea.inflorescence.peduncle = new Peduncle()
Mimosa_phyllodinea.inflorescence.capitate = new CapitateInflorescence()

Mimosa_phyllodinea.flower = new Flower()
Mimosa_phyllodinea.flower.bracteole = new Bracteole()
Mimosa_phyllodinea.flower.merism = '4-merous'
Mimosa_phyllodinea.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_phyllodinea.flower.calyx = new Calyx()
Mimosa_phyllodinea.flower.corolla = new Corolla()
Mimosa_phyllodinea.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_phyllodinea.androecium = new Androecium()
Mimosa_phyllodinea.androecium.filaments = new Filaments()
Mimosa_phyllodinea.androecium.filaments.colour = 'pinkish'

Mimosa_phyllodinea.ginoecium = new Ginoecium()
Mimosa_phyllodinea.ginoecium.ovary = new Ovary()

Mimosa_phyllodinea.fruit = new Fruit()
Mimosa_phyllodinea.fruit.stipe = new Stipe()
Mimosa_phyllodinea.fruit.replum = new Replum()
Mimosa_phyllodinea.fruit.epicarp = new Epicarp()

Mimosa_phyllodinea.seed = new Seed()


// Description authorship
Mimosa_phyllodinea.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_phyllodinea.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa phyllodinea
export { Mimosa_phyllodinea }